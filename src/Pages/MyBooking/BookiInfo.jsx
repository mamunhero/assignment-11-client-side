
const BookiInfo = ({bookInfo}) => {
  const  {name, phone, price, size, roomId, offer} = bookInfo || {}
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
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
    </tr>
  );
};

export default BookiInfo;

