import { actionTypes } from '../../src/actions/index.js';
import reducer from '../../src/reducers/searchReducer';

describe('people reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
  ).toEqual({
          data: {
              searchTerm: '',
              filteredPeople: [],
          },
  })
  })

  it('should handle PEOPLE_GET_RESOLVED', () => {
    expect(
      reducer({}, {
        type: actionTypes.PEOPLE_GET_RESOLVED,
        people: [{name:'person'}]
      })
    ).toEqual(
        {
        data: { filteredPeople: [{name: 'person'}] }
        }
    )
  })

  it('should handle FILTER_PEOPLE', () => {
    expect(
      reducer({}, {
        type: actionTypes.FILTER_PEOPLE,
        searchTerm: 'Ackbar', filteredPeople: [{name:'person'}]
      })
    ).toEqual(
        {
        data: { searchTerm: 'Ackbar', filteredPeople: [{name:'person'}]}
        }
    )
  })
})
