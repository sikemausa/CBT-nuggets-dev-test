import { actionTypes } from '../../src/actions/index.js';
import reducer from '../../src/reducers/peopleReducer';

describe('people reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
  ).toEqual({
          data: {
              people: [],
              filteredPeople: [],
              searchTerm: '',
          },
          status: 'NOT_STARTED',
          error: {},
  })
  })

  it('should handle PEOPLE_GET_PENDING', () => {
    expect(
      reducer({}, {
        type: actionTypes.PEOPLE_GET_PENDING,
      })
    ).toEqual(
        {
            status: 'LOADING',
            error: false
        }
    )
  })

  it('should handle PEOPLE_GET_RESOLVED', () => {
    expect(
      reducer({}, {
        type: actionTypes.PEOPLE_GET_RESOLVED,
        people: [{name:'person'}]
      })
    ).toEqual(
        {
            data: { people: [{name: 'person'}] },
            status: 'SUCCESS',
            error: false
        }
    )
  })

  it('should handle PEOPLE_GET_REJECTED', () => {
    expect(
      reducer({}, {
        type: actionTypes.PEOPLE_GET_REJECTED,
      })
    ).toEqual(
        {
            status: 'ERROR',
            error: actionTypes.PEOPLE_GET_REJECTED.error
        }
    )
  })
})
