cd frontend
npm i && npm run build

cd ..
cp frontend/dist backend -rf
cd backend 
npm i && npm run dev

