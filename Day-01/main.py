import time
import sys


def main(should_print=True):
    t0 = time.time()

    meals = []
    current_meal = 0
    # Read and parse input
    with open("./input.txt", "r") as f:
        meal_input = [" ".join(line.split()) for line in f.read().splitlines()]
        for line in meal_input:
            if line == "":
                meals.append((current_meal))
                current_meal = 0
                continue
            else:
                current_meal += int(line)

    # Get the top 3 meals with the most calories
    top_meals = sorted(meals, reverse=True)[:3]
    t1 = time.time()
    total_time = (t1 - t0) * 1000

    if should_print:
        print(f"Time: {round(total_time, 4)}ms")
        print(f"Top meal: {top_meals[0]}")
        print(f"Top 3 meals: {top_meals}. In total: {sum(top_meals)} calories")
    return total_time


if __name__ == "__main__":
    if len(sys.argv) > 1:
        times = []
        for _ in range(1000):
            times.append(main(False))
        print(f"Average time: {round(sum(times) / len(times), 40)}ms")
    else:
        main()
