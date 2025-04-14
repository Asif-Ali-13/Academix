Instructions to Execute the Code and Reproduce the Results
----------------------------------------------------------

1. Create a .env File in the Server Directory:
   Create a file named `.env` and add the following environment credentials:

   PORT=5001  
   CLIENT_URL=http://localhost:5173
    
   MONGO_URI=
   
   CLOUDINARY_CLOUD_NAME=
   
   CLOUDINARY_API_KEY=
   
   CLOUDINARY_API_SECRET=
   
   PAYPAL_CLIENT_ID=
   
   PAYPAL_SECRET_ID=

3. Set Up the Frontend:
   - Open a terminal and navigate to the frontend directory:
     cd client
   - Install dependencies:
     npm install
   - Start the development server:
     npm run dev

4. Set Up the Backend:
   - Open another terminal and navigate to the backend directory:
     cd server
   - Install dependencies:
     npm install
   - Start the backend server:
     npm run dev

5. Access the Application:
   - Frontend: http://localhost:5173  
   - Backend/API: http://localhost:5001  

----------------------------------------------------------
