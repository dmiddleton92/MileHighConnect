// Purpose: Establish a connection to the MongoDB database.

import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/developersApplications');

export default mongoose.connection;