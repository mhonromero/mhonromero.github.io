<template>
    <div>
        <b-card-text>Principles of Agile Software Development</b-card-text>
        <div>
        <b-input-group prepend="Input Principles" class="mt-3">
            <b-form-input v-model="Addprinciples"></b-form-input>
            <b-input-group-append>
            <b-button variant="success" @click="addPrinciples(Addprinciples)">Add Principles</b-button>
            </b-input-group-append>
        </b-input-group>
        </div>
        <div class="mt-3">
        <b-table-simple hover small caption-top responsive>
            <b-thead head-variant="dark">
            <b-tr>
                <b-th>Principles</b-th>
                <b-th>Actions</b-th>
            </b-tr>
            </b-thead>
            <b-tbody>
            <b-tr v-for="(value, key) of principlesCollection" :key="`${ key }`">
                    <b-th  v-if="!value.edit">{{ value.principles }}</b-th>
                    <b-th  v-if="!value.edit">
                    <b-button-group>
                        <b-button variant="success" @click="editPrinciples(`${ key }`)">Edit</b-button>
                        <b-button variant="danger" @click="deletePrinciples(`${ key }`)">Delete</b-button>
                    </b-button-group>
                    </b-th>
                    <b-th v-if="value.edit"><b-form-input v-model="value.principles" ></b-form-input></b-th>
                    <b-th v-if="value.edit">
                    <b-button-group>
                        <b-button variant="primary" @click="savePrinciples(value.principles,`${ key }`)">Save</b-button>
                        <b-button variant="dark" @click="cancelEdit(`${ key }`)">Cancel</b-button>
                    </b-button-group>
                    </b-th>
            </b-tr>
            </b-tbody>
        </b-table-simple>
        </div>
    </div>
</template>

<script>
import { principlesRef } from '../firebase';

export default {
  name: 'Principles',
  data () {
    return {
      Addprinciples:'',
      principlesCollection : []
    }
  },
  
  methods: {
    addPrinciples(Addprinciples){
      if(Addprinciples){
        principlesRef.push({
          principles: Addprinciples,
          edit: false
        })
  
        this.refreshList()
        this.Addprinciples = ''
      }
    },

    deletePrinciples(key){
      principlesRef.child(key).remove()
      .then(() =>{
        this.refreshList()
      })
      .catch(()=>{
        console.log('failed to remove')
      });
    },

    editPrinciples(key){
      principlesRef.child(key).update({ edit: true})
      .then(() =>{
        this.refreshList()
      })
      .catch(()=>{
        console.log('failed to update')
      });
    },

    cancelEdit(key){
      principlesRef.child(key).update({ edit: false})
      .then(() =>{
        this.refreshList()
      })
      .catch(()=>{
        console.log('failed to update')
      });
    },

    savePrinciples(principles,key) {
      principlesRef.child(key).set({ 
        principles: principles,
      })
      .then(() =>{
        this.refreshList()
      })
      .catch(()=>{
        console.log('failed to update')
      });
    },

    refreshList(){
      const dbRef = principlesRef;
      dbRef.get().then((snapshot) => {
        if (snapshot.exists()) {
          this.principlesCollection  = snapshot.toJSON()
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    }
  },
  async mounted(){
    await this.refreshList()
  }
}
</script>