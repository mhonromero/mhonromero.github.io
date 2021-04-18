import { shallowMount } from '@vue/test-utils'
import Values from '../../src/components/Values.vue'
import { valuesRef } from '../../src/firebase';


const setValuesWrapper = (values = {}, emit) => {
    return shallowMount(Values, {
        data(){
            return {
                ...values
            }
        },
        mocks:{
            $emit: emit
        },
        stubs:{
            'b-form-input': true,
            'b-input-group-append': true,
            'b-card-text': true,
            'b-input-group': true,
            'b-button': true,
            'b-table-simple': true,
            'b-thead': true,
            'b-tr': true,
            'b-th': true,
            'b-tbody': true,
            'b-button-group': true
        }
    })
}

describe('components/Values.vue', () => {
    afterAll(() => {
        jest.clearAllMocks()
    })

    test('1. mounted', async () => {
        const spy = jest.spyOn(Values.methods, 'refreshList')
        
        const wrapper = setValuesWrapper()
        wrapper.vm.refreshList()

        
        // Act.
        wrapper.vm.$nextTick()

        // Assert.
        expect(spy).toBeCalled()
        expect(wrapper.exists()).toBe(true)
        
    })

    test('2. refreshList', async () => {

        
        const wrapper = setValuesWrapper()
        wrapper.vm.refreshList.dbRef = valuesRef
        
        // Act.
        wrapper.vm.refreshList()
        wrapper.vm.$nextTick()
            
            
        expect(wrapper.vm.valuesCollection.length > 0).toBe(false)
        expect(wrapper.exists()).toBe(true)
    })

    test('3. saveValues', async () => {

        // Arange
        var value = 'test1'
        var key = '-MYODlyJs3jgKSijKC00'

        const spy = jest.spyOn(Values.methods, 'refreshList')
        
        const wrapper = setValuesWrapper()


        // Act.
        wrapper.vm.saveValues(value,key)
        wrapper.vm.$nextTick()

        // Assert
        expect(spy).toHaveBeenCalled()
        
    })

    test('4. cancelEdit', async () => {

        // Arange
        var key = '-MYODlyJs3jgKSijKC00'

        const spy = jest.spyOn(Values.methods, 'refreshList')
        
        const wrapper = setValuesWrapper()


        // Act.
        wrapper.vm.cancelEdit(key)
        wrapper.vm.$nextTick()

        // Assert
        expect(spy).toHaveBeenCalled()
        
    })

    test('5. editValues', async () => {

        // Arange
        var key = '-MYODlyJs3jgKSijKC00'

        const spy = jest.spyOn(Values.methods, 'refreshList')
        
        const wrapper = setValuesWrapper()


        // Act.
        wrapper.vm.editValues(key)
        wrapper.vm.$nextTick()

        // Assert
        expect(spy).toHaveBeenCalled()
        
    })

    test('6. deleteValues', async () => {

        // Arange
        var key = '-MYODlyJs3jgKSijKC00'

        const spy = jest.spyOn(Values.methods, 'refreshList')
        
        const wrapper = setValuesWrapper()


        // Act.
        wrapper.vm.deleteValues(key)
        wrapper.vm.$nextTick()

        // Assert
        expect(spy).toHaveBeenCalled()
        
    })

    test('7. addValues', async () => {

        // Arange
        const spy = jest.spyOn(Values.methods, 'refreshList')
        
        const wrapper = setValuesWrapper()

        wrapper.vm.Addvalue = ''

        // Act.
        wrapper.vm.addValues('test')
        wrapper.vm.$nextTick()

        // Assert
        expect(wrapper.vm.Addvalue.length > 0).toBe(false)
        expect(spy).toHaveBeenCalled()
        
    })
})