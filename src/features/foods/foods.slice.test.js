import foods, {
  getFoodsStart,
  getFoodsSuccess,
  getFoodsFailure
} from "./foods.slice";

describe("foods reducer", () => {
  it("should have an empty initial state", () => {
    expect(foods(undefined, {})).toEqual({
      foods: [],
      isLoading: false,
      error: null
    });
  });

  it("should activate isLoading", () => {
    expect(
      foods(undefined, {
        type: getFoodsStart.type
      })
    ).toEqual({ foods: [], isLoading: true, error: null });
  });

  it("should add foods", () => {
    expect(
      foods(undefined, {
        type: getFoodsSuccess.type,
        payload: [{ id: "banana", name: "Banana", emoji: "🌽" }]
      })
    ).toEqual({
      foods: [{ id: "banana", name: "Banana", emoji: "🌽" }],
      isLoading: false,
      error: null
    });

    expect(
      foods(
        {
          foods: [{ id: "banana", name: "Banana", emoji: "🌽" }],
          isLoading: true,
          error: "timeout"
        },
        {
          type: getFoodsSuccess.type,
          payload: [
            { id: "pasta", name: "Pasta", emoji: "🍝" },
            { id: "pretzel", name: "Pretzel", emoji: "🥨" }
          ]
        }
      )
    ).toEqual({
      foods: [
        { id: "banana", name: "Banana", emoji: "🌽" },
        { id: "pasta", name: "Pasta", emoji: "🍝" },
        { id: "pretzel", name: "Pretzel", emoji: "🥨" }
      ],
      isLoading: false,
      error: null
    });
  });

  it("should add an error", () => {
    expect(
      foods(undefined, {
        type: getFoodsFailure.type,
        payload: "some error"
      })
    ).toEqual({
      foods: [],
      isLoading: false,
      error: "some error"
    });

    expect(
      foods(
        {
          foods: [{ id: "banana", name: "Banana", emoji: "🌽" }],
          isLoading: true,
          error: "timeout"
        },
        {
          type: getFoodsFailure.type,
          payload: "another error"
        }
      )
    ).toEqual({
      foods: [{ id: "banana", name: "Banana", emoji: "🌽" }],
      isLoading: false,
      error: "another error"
    });
  });
});
