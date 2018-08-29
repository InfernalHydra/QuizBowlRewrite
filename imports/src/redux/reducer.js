import update from 'immutability-helper';

let reducer = (state, action) => {    
    switch (action.type) {          
      case 'CHANGE_COUNT':
        return update(state, {count : {$set: state.count+1}})
      case 'MENU_TOGGLE':
        return update(state, {menu : {$set: state.menu?false:true}})
      default:
        return state;
    }
  }
  export default reducer