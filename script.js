class FoodLog {
    constructor() {
        this.entries = []; // Array to hold daily food entries
    }

    /**
     * Adds a food item to the log.
     * @param {string} food - The name of the food item.
     * @param {number} calories - Caloric content of the food item.
     */
    addEntry(food, calories) {
        this.entries.push({ food, calories });
        alert(`${food} with ${calories} calories added to your food log.`);
    }

    /**
     * Calculates the total calories consumed for the day.
     * @return {number} - Total calories.
     */
    getTotalCalories() {
        return this.entries.reduce((total, entry) => total + entry.calories, 0);
    }

    /**
     * Displays all entries in the food log.
     */
    displayEntries() {
        if (this.entries.length > 0) {
            alert('Food Log:\n' + this.entries.map(entry => `${entry.food}: ${entry.calories} calories`).join('\n'));
        } else {
            alert('Your food log is empty.');
        }
    }
}

/**
 * Function to run the food log application.
 */
function runFoodLogApp() {
    const foodLog = new FoodLog();
    let continueLogging = true;

    while (continueLogging) {
        const food = prompt("Enter the food you ate:");
        if (!food) break;  // Stop if user cancels or enters nothing

        const calories = parseInt(prompt("Enter the calories for the food:"));
        if (isNaN(calories)) {
            alert("Please enter a valid number for calories.");
            continue;
        }

        foodLog.addEntry(food, calories);

        const addMore = confirm("Would you like to add more items to your food log?");
        if (!addMore) {
            continueLogging = false;
        }
    }

    foodLog.displayEntries();
    const totalCalories = foodLog.getTotalCalories();
    alert(`Total Calories Consumed Today: ${totalCalories}`);
}

// Start the application
runFoodLogApp();
