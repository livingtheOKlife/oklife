import mongoose, { mongo } from 'mongoose'

/**------------------------------ connect to database
 *
 * @name connectDB
 * @function
 * @async
 * @requires mongoose
 * @description connect to mongodb database
 *
 * --------------- */

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
