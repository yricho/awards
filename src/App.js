import React from 'react';
import { useEffect, useState } from 'react';
import api from './Api/Api';
import { CardList } from './Components/common/Card';
import CategoryItems from './Components/CategoryItems';
import Button from './Components/common/Button';
import Modal from './Components/common/Modal';
import Layout from './Components/Layout';

function App() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [storageData, setStorageData] = useState(null);

  useEffect(() => {
    handleFetch();
  }, [])

  const handleFetch = async () => {
    try {
      await api.getBallotData()
        .then(res => setData(res.items))
    } catch (error) {
      setError(error);
    }
  }

  const handleShowModal = () => {
    if (storageData?.length === data?.length) {
      setShowModal(true);
    }
  }

  return (
    <Layout>

      {!error ?
        <>

          {/* list of categories */}
          <div className='my-8'>
            {
              data?.map((item, index) =>
                <div key={index}>
                  <CategoryItems item={item} callBack={storage => setStorageData(storage)} />
                </div>
              )
            }
          </div>

          {/* submit button */}
          <div className='text-center sticky bottom-0 py-8'>
            <Button
              className={`${storageData?.length === data?.length ? 'bg-green-persia hover:bg-keppel' : 'bg-silver'} py-4 px-16 rounded-lg border-2 text-white text-xl lg:text-2xl font-black uppercase`}
              onClick={handleShowModal}
            >
              Submit
            </Button>
          </div>

          {/* show modal */}
          <Modal
            isShow={showModal}
            title="Selected Nominee"
            onClose={() => setShowModal(false)}
          >
            <div className='divide-y'>
              {
                storageData?.map((item, index) =>
                  <div key={index} className='py-4'>
                    <CardList item={item} />
                  </div>
                )
              }
            </div>
          </Modal>

        </>
        :
        <div className='my-16 p-4 border'>Data Not Found</div>
      }
    </Layout>
  );
}

export default App;
