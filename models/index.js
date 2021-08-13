const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises : [{
        type: {
            type: String, 
            required: "Select a type of workout - resistance, or cardio"
        },
        name: {
            type: String, 
            trim: true,
            required: "Enter a name for your workout"
        },
        duration: {
            type: Number, 
            required: "Please enter a duration"
        },
        distance: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        }
    }]
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;