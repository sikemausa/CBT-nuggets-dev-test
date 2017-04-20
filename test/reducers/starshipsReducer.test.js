import { actionTypes } from '../../src/actions/index.js';
import reducer from '../../src/reducers/starshipsReducer';

describe('starships reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
  ).toEqual({
          data: {
              people: [],
              starships: [],
          },
          status: 'NOT_STARTED',
          error: {},
  })
  })

  it('should handle STARSHIPS_GET_PENDING', () => {
    expect(
      reducer({}, {
        type: actionTypes.STARSHIPS_GET_PENDING,
      })
    ).toEqual(
        {
            status: 'LOADING',
            error: false
        }
    )
  })

  it('should handle STARSHIPS_GET_RESOLVED', () => {
    expect(
      reducer({}, {
        type: actionTypes.STARSHIPS_GET_RESOLVED,
        starships: [{name:'starship'}]
      })
    ).toEqual(
        {
            data: { starships: [{name: 'starship'}] },
            status: 'SUCCESS',
            error: false
        }
    )
  })

  it('should handle STARSHIPS_GET_REJECTED', () => {
    expect(
      reducer({}, {
        type: actionTypes.STARSHIPS_GET_REJECTED,
      })
    ).toEqual(
        {
            status: 'ERROR',
            error: actionTypes.STARSHIPS_GET_REJECTED.error
        }
    )
  })
})
