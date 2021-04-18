import { shallowMount } from '@vue/test-utils'
import Principles from '../../src/components/Principles.vue'
import { principlesRef } from '../../src/firebase';


const setPrinciplesWrapper = (values = {}, emit) => {
    return shallowMount(Principles, {
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

describe('components/Principles.vue', () => {
    afterAll(() => {
        jest.clearAllMocks()
    })

    test('1. mounted', async () => {
        const spy = jest.spyOn(Principles.methods, 'refreshList')
        
        const wrapper = setPrinciplesWrapper()
        wrapper.vm.refreshList()

        
        // Act.
        wrapper.vm.$nextTick()

        // Assert.
        expect(spy).toBeCalled()
        expect(wrapper.exists()).toBe(true)
        
    })

    test('2. refreshList', async () => {

        
        const wrapper = setPrinciplesWrapper()
        wrapper.vm.refreshList.dbRef = principlesRef
        
        // Act.
        wrapper.vm.refreshList()
        wrapper.vm.$nextTick()
            
            
        expect(wrapper.vm.principlesCollection.length > 0).toBe(false)
        expect(wrapper.exists()).toBe(true)
    })

    test('3. savePrinciples', async () => {

        // Arange
        var value = 'test1'
        var key = '-MYODlyJs3jgKSijKC00'

        const spy = jest.spyOn(Principles.methods, 'refreshList')
        
        const wrapper = setPrinciplesWrapper()


        // Act.
        wrapper.vm.savePrinciples(value,key)
        wrapper.vm.$nextTick()

        // Assert
        expect(spy).toHaveBeenCalled()
        
    })

    test('4. cancelEdit', async () => {

        // Arange
        var key = '-MYODlyJs3jgKSijKC00'

        const spy = jest.spyOn(Principles.methods, 'refreshList')
        
        const wrapper = setPrinciplesWrapper()


        // Act.
        wrapper.vm.cancelEdit(key)
        wrapper.vm.$nextTick()

        // Assert
        expect(spy).toHaveBeenCalled()
        
    })

    test('5. editPrinciples', async () => {

        // Arange
        var key = '-MYODlyJs3jgKSijKC00'

        const spy = jest.spyOn(Principles.methods, 'refreshList')
        
        const wrapper = setPrinciplesWrapper()


        // Act.
        wrapper.vm.editPrinciples(key)
        wrapper.vm.$nextTick()

        // Assert
        expect(spy).toHaveBeenCalled()
        
    })

    test('6. deletePrinciples', async () => {

        // Arange
        var key = '-MYODlyJs3jgKSijKC00'

        const spy = jest.spyOn(Principles.methods, 'refreshList')
        
        const wrapper = setPrinciplesWrapper()


        // Act.
        wrapper.vm.deletePrinciples(key)
        wrapper.vm.$nextTick()

        // Assert
        expect(spy).toHaveBeenCalled()
        
    })

    test('7. addPrinciples', async () => {

        // Arange
        const spy = jest.spyOn(Principles.methods, 'refreshList')
        
        const wrapper = setPrinciplesWrapper()

        wrapper.vm.Addprinciples = ''

        // Act.
        wrapper.vm.addPrinciples('test')
        wrapper.vm.$nextTick()

        // Assert
        expect(wrapper.vm.Addprinciples.length > 0).toBe(false)
        expect(spy).toHaveBeenCalled()
        
    })
})