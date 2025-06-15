import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'server/uploads/')
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname)
    cb(null, `${file.fieldname}-${Date.now()}${ext}`)
  },
})

/**------------------------------ upload middleware
 *
 * @name uploadFile
 * @requires multer
 * @requires path
 * @description handles file uploads
 *
 * --------------- */

const uploadFile = multer({ storage: storage })

export default uploadFile
