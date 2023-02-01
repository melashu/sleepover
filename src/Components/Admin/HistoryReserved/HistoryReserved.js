import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchreserved } from '../../../Redux/Admin/historyReserved';
import './HistoryReserved.css';

const AllReserved = () => {
  const { reserved } = useSelector((state) => state.reserved);
  const dispatch = useDispatch();

  useEffect(() => {
    if (reserved.length === 0) {
      dispatch(fetchreserved());
    }
  }, [dispatch, reserved.length]);
  if (reserved.length === 0) {
    return (
      <div className="container bg-dark d-flex justify-content-center my-5 py-5">
        <div className="row">
          <h1 className="col-12 ABLoading"> Reserved Room Loading ...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="container AllReserved bg-dark p-5">
      <h1 className="text-center py-5 ABTotalTitle">All Reserved Room</h1>
      <div className="row my-5">
        <div className="col-12 row">
          {reserved.map((item) => (
            <div className="col-6 row px-5" key={item.id}>
              <img className="col-6 ABRoomImage" src={item.room.photo} alt="Room" />
              <div className="col-6">
                <h3 className="col-12">
                  User: &nbsp;
                  {item.user.name}
                </h3>
                <h3 className="col-12 py-5">
                  {item.room.number_of_bed}
                  {' '}
                  Bed Room
                </h3>
                <h3 className="col-12">
                  Price: &nbsp;
                  {item.room.prices}
                  $
                </h3>
                <h3 className="col-12 py-5">
                  Reserved from:
                  <br />
                  <br />
                  {item.start_date}
                  {' '}
                  to
                  {item.end_date}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AllReserved;
