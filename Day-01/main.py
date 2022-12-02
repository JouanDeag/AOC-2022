import time

t0 = time.time()

meals = []
current_meal = []
meals_calories = []
# Read and parse input
with open("./input.txt", "r") as f:
    meal_input = [" ".join(line.split()) for line in f.read().splitlines()]
    for line in meal_input:
        if line == "":
            meals.append(current_meal)
            current_meal = []
            continue
        else:
            current_meal.append(line)

# Get the meal with the most calories
for meal in meals:
    meal_calories = 0
    for calories in meal:
        meal_calories += int(calories)
    meals_calories.append(meal_calories)


# Get the top 3 meals with the most calories
top_meals = sorted(meals_calories, reverse=True)[:3]
t1 = time.time()
total_time = (t1 - t0) * 1000

print(f"Time: {round(total_time, 4)}ms")
print(f"Top meal: {max(meals_calories)}")
print(f"Top 3 meals: {top_meals}. In total: {sum(top_meals)} calories")
