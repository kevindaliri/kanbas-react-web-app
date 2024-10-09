import { IoEllipsisVertical, IoAddCircleOutline } from "react-icons/io5"; 

export default function LessonControlButtons() {
  return (
    <div className="float-end">
      <IoAddCircleOutline className="fs-4 text-dark me-2" /> 
      <IoEllipsisVertical className="fs-4 text-dark" /> 
    </div>
  );
}
