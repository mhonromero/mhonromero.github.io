<template>
    <div>
        <b-card-text>Values of Agile Software Development</b-card-text>
        <div>
        <b-input-group prepend="Input Values" class="mt-3">
            <b-form-input v-model="Addvalue"></b-form-input>
            <b-input-group-append>
            <b-button variant="success" @click="addValues(Addvalue)">Add Values</b-button>
            </b-input-group-append>
        </b-input-group>
        </div>
        <div class="mt-3">
        <b-table-simple hover small caption-top responsive>
            <b-thead head-variant="dark">
            <b-tr>
                <b-th>Values</b-th>
                <b-th>Actions</b-th>
            </b-tr>
            </b-thead>
            <b-tbody>
            <b-tr v-for="(value, key) of valuesCollection" :key="`${ key }`">
                    <b-th  v-if="!value.edit">{{ value.value }}</b-th>
                    <b-th  v-if="!value.edit">
                    <b-button-group>
                        <b-button variant="success" @click="editValues(`${ key }`)">Edit</b-button>
                        <b-button variant="danger" @click="deleteValues(`${ key }`)">Delete</b-button>
                    </b-button-group>
                    </b-th>
                    <b-th v-if="value.edit"><b-form-input v-model="value.value" ></b-form-input></b-th>
                    <b-th v-if="value.edit">
                    <b-button-group>
                        <b-button variant="primary" @click="saveValues(value.value,`${ key }`)">Save</b-button>
                        <b-button name='cancel' id='cancel' variant="dark" @click="cancelEdit(`${ key }`)">Cancel</b-button>
                    </b-button-group>
                    </b-th>
            </b-tr>
            </b-tbody>
        </b-table-simple>
        </div>
    </div>
</template>

<script>
import { valuesRef } from '../firebase';

export default {
  name: 'Values',
  data () {
    return {
      Addvalue:'',
      valuesCollection : []
    }
  },
  
  methods: {
    addValues(addVal){
      if(addVal){
        valuesRef.push({
          value: addVal,
          edit: false
        })
  
        this.refreshList()
        this.Addvalue = ''
      }
    },

    deleteValues(key){
      valuesRef.child(key).remove()
      .then(() =>{
        this.refreshList()
      })
      .catch(()=>{
        console.log('failed to remove')
      });
    },

    editValues(key){
      valuesRef.child(key).update({ edit: true})
      .then(() =>{
        this.refreshList()
      })
      .catch(()=>{
        console.log('failed to update')
      });
    },

    refreshList(){
      const dbRef = valuesRef;
      dbRef.get().then((snapshot) => {
        console.log('login')
        if (snapshot.exists()) {
          this.valuesCollection  = snapshot.toJSON()
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    },

    cancelEdit(key){
      valuesRef.child(key).update({ edit: false})
      .then(() =>{
        this.refreshList()
      })
      .catch(()=>{
        console.log('failed to update')
      });
    },

    saveValues(value,key) {
      valuesRef.child(key).set({ 
        value: value,
      })
      .then(() =>{
        this.refreshList()
      })
      .catch(()=>{
        console.log('failed to update')
      });
    },
  },
  async mounted(){
    await this.refreshList()
  }
}
</script>