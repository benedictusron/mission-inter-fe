import Ava from '../../assets/Avatar.png'

function Profile() {
    const buttonProfile = document.getElementById('button-Profile');

 
    return (
        <button className="button-profile px-0 py-2 ms-5">
            <a href="">
                <img src={Ava} alt="Profile Ava" />
            </a>
        </button>
    )
}

export default Profile