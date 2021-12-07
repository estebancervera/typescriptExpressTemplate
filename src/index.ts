import { config } from 'dotenv';
if (process.env.NODE_ENV !== 'production') {
	config();
}

//Start the API with Express
import { app } from './api';
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
