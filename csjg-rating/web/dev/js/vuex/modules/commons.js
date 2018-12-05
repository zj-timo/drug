/**
 * [common 公共状态]
 * @type {Object}
 */
const state = {
    
    menus_table:{
      position:'',
    }
}

const mutations = {
    ['MENUS_TABLE_POSITION'](state,data) {
      state.menus_table.position = data;
    }
}


export default {
    state,
    mutations
}