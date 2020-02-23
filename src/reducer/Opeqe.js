
const initial = {
  header: '#efefef'
}

const opeqe = (state = initial, action) => {
  switch (action.type) {
    case 'CHANGE_HEADER':
      return {
        ...state,
        header: action.header
      }

    default:
      return state
  }
}

export default opeqe
