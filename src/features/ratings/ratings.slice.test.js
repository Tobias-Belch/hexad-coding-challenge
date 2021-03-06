import ratings, { decreaseRating, increaseRating } from "./ratings.slice";

describe("ratings reducer", () => {
  it("should have an empty initial state", () => {
    expect(ratings(undefined, {})).toEqual({});
  });

  it("should increase entry ratings", () => {
    expect(
      ratings(undefined, {
        type: increaseRating.type,
        payload: {
          id: "item-1"
        }
      })
    ).toEqual({ "item-1": 1 });

    expect(
      ratings(
        {
          "item-1": 3,
          "item-2": 1
        },
        {
          type: increaseRating.type,
          payload: {
            id: "item-2"
          }
        }
      )
    ).toEqual({
      "item-1": 3,
      "item-2": 2
    });
  });

  it("should decrease entry ratings", () => {
    expect(
      ratings(undefined, {
        type: decreaseRating.type,
        payload: {
          id: "item-1"
        }
      })
    ).toEqual({ "item-1": -1 });

    expect(
      ratings(
        {
          "item-1": 3,
          "item-2": 1
        },
        {
          type: decreaseRating.type,
          payload: {
            id: "item-2"
          }
        }
      )
    ).toEqual({
      "item-1": 3,
      "item-2": 0
    });
  });
});
