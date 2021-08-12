const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {

    },
    type: {

    },
    duration: {

    },
    distance: {

    },
    weight: {

    },
    sets: {

    },
    reps: {

    }
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;