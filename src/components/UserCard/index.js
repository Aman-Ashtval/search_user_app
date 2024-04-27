import './index.css'

const UserCard = props => {
  const {userDetails} = props
  const {name, age, country, mobile, email} = userDetails;

  return (
    <li className="app-item">
      {/* <img className="app-image" src={imageUrl} alt={appName} /> */}
      <p className="app-name">{name}</p>
      <p>{age}</p>
      <p>{country}{mobile}{email}</p>
    </li>
  )
}

export default UserCard
