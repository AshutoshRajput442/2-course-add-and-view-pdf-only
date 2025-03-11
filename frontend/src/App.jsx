// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import CourseForm from "./components/CourseForm";
// import CourseList from "./components/CourseList";

// export default function App() {
//   return (
//     <Router>
//       <div className="p-4">
//         <nav className="mb-4">
//           <Link to="/" className="mr-4 text-blue-500">Home</Link>
//           <Link to="/add-course" className="text-green-500">Add Course</Link>
//         </nav>
        
//         <Routes>
//           <Route path="/" element={<CourseList />} />
//           <Route path="/add-course" element={<CourseForm />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";

function App() {
  return (
    <div>
      <h1>Course Management</h1>
      <CourseForm />
      <CourseList />
    </div>
  );
}

export default App;
