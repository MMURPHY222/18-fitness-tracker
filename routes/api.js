const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workouts", (req, res) => {
  
    Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    {
        $addFields: {
            totalDuration: {
                $sum: '$exercises.duration'
            },
        }
    }
])
.then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
})

router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                },
            }
        }
    ]).sort({day: -1}).limit(7)
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
})

router.put("/api/workouts/:id", (req, res) => {
  console.log(req.params.id);
    Workout.findByIdAndUpdate(req.params.id, 
      {
        $push: {
          exercises: req.body
        }
      }, {new: true})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })

      console.log(req.body);

      });

module.exports = router;