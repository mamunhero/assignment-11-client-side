
const BookiInfo = ({bookInfo, handleDelete}) => {
  const  {_id, name, phone, price, size, roomId, offer} = bookInfo || {}
 
  return (
    <tr>
        <th>1</th>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{price}</td>
        <td>{size}</td>
        <td>{roomId}</td>
        <td>{offer}</td>
        <th>
          <button onClick={()=>handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
        </th>
        <th>
          <button onClick={()=>handleUpdate(_id)} className="btn btn-ghost btn-xs">Update</button>
        </th>
    </tr>
  );
};

export default BookiInfo;

