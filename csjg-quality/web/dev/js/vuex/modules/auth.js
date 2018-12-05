/**
 * [common 公共状态]
 * @type {Object}
 */
const state = {
    
    menus_table:{
      position:'',
    },

    menus: []
}

const mutations = {
    ['MENUS_TABLE_POSITION'](state,data) {
      state.menus_table.position = data;
    },

    ['GET_MENUS'](state,data) {
      state.menus = data;
    }
}


export default {
    state,
    mutations
}