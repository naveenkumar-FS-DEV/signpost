import { useNavigate } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";

const BackBtn = () => {
    const navigate = useNavigate();
    return (
        <div>
            <section>
                <div>
                    <IoArrowBackCircle onClick={() => navigate(-1)} size={35} className="text-orange-700"/>
                </div>
            </section>
        </div>
    );
};

export default BackBtn;
