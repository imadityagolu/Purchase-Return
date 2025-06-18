import './AllProducts.css';
import { Link } from 'react-router-dom';
import { GrDocumentPdf } from "react-icons/gr";
import { TbFileTypeXml } from "react-icons/tb";
import { HiOutlineRefresh } from "react-icons/hi";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosSearch, IoIosArrowDown, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";

import img from '../images/lapi.jpg';

const dummyData = [
  {
    id: 1,
    image: img,
    date: '2025-06-01',
    supplierName: 'Acme Corp',
    referenceNumber: 'REF-001',
    status: 'Pending',
    amount: 1500.00,
    amountPaid: 500.00,
    dueAmount: 1000.00,
    paymentStatus: 'Partially Paid'
  },
  {
    id: 2,
    image: img,
    date: '2025-06-03',
    supplierName: 'Beta Supplies',
    referenceNumber: 'REF-002',
    status: 'Approved',
    amount: 2500.00,
    amountPaid: 2500.00,
    dueAmount: 0.00,
    paymentStatus: 'Fully Paid'
  },
  {
    id: 3,
    image: img,
    date: '2025-06-05',
    supplierName: 'Gamma Traders',
    referenceNumber: 'REF-003',
    status: 'Rejected',
    amount: 800.00,
    amountPaid: 0.00,
    dueAmount: 800.00,
    paymentStatus: 'Unpaid'
  },
  {
    id: 4,
    image: img,
    date: '2025-06-07',
    supplierName: 'Delta Imports',
    referenceNumber: 'REF-004',
    status: 'Pending',
    amount: 3200.00,
    amountPaid: 1000.00,
    dueAmount: 2200.00,
    paymentStatus: 'Partially Paid'
  },
  {
    id: 5,
    image: img,
    date: '2025-06-10',
    supplierName: 'Epsilon Ltd',
    referenceNumber: 'REF-005',
    status: 'Approved',
    amount: 1800.00,
    amountPaid: 1800.00,
    dueAmount: 0.00,
    paymentStatus: 'Fully Paid'
  },
  {
    id: 6,
    image: img,
    date: '2025-06-07',
    supplierName: 'Delta Imports',
    referenceNumber: 'REF-004',
    status: 'Pending',
    amount: 3200.00,
    amountPaid: 1000.00,
    dueAmount: 2200.00,
    paymentStatus: 'Partially Paid'
  },
  {
    id: 7,
    image: img,
    date: '2025-06-07',
    supplierName: 'Delta Imports',
    referenceNumber: 'REF-004',
    status: 'Return',
    amount: 3200.00,
    amountPaid: 1000.00,
    dueAmount: 2200.00,
    paymentStatus: 'Partially Paid'
  },
  {
    id: 8,
    image: img,
    date: '2025-06-07',
    supplierName: 'Delta Imports',
    referenceNumber: 'REF-004',
    status: 'Pending',
    amount: 3200.00,
    amountPaid: 1000.00,
    dueAmount: 2200.00,
    paymentStatus: 'Partially Paid'
  },
  {
    id: 9,
    image: img,
    date: '2025-06-07',
    supplierName: 'Delta Imports',
    referenceNumber: 'REF-004',
    status: 'Return',
    amount: 3200.00,
    amountPaid: 1000.00,
    dueAmount: 2200.00,
    paymentStatus: 'Partially Paid'
  },
  {
    id: 10,
    image: img,
    date: '2025-06-07',
    supplierName: 'Delta Imports',
    referenceNumber: 'REF-004',
    status: 'Pending',
    amount: 3200.00,
    amountPaid: 1000.00,
    dueAmount: 2200.00,
    paymentStatus: 'Partially Paid'
  }
];

const SupplierRow = ({ supplier }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved': return 'approved';
      case 'Pending': return 'pending';
      case 'Rejected': return 'rejected';
      default: return 'return';
    }
  };

  const getPaymentStatusColor = (paymentStatus) => {
    switch (paymentStatus) {
      case 'Fully Paid': return 'fpaid';
      case 'Partially Paid': return 'ppaid';
      case 'Unpaid': return 'upaid';
      default: return 'rpaid';
    }
  };

  return (
        
        <tr className='table-details'>
        <td className='check-box'><input type="checkbox" /></td>
        <td><img src={supplier.image} alt="Supplier" className="img" /></td>
        <td>{supplier.date}</td>
        <td>{supplier.supplierName}</td>
        <td>{supplier.referenceNumber}</td>
        <td><span className={`${getStatusColor(supplier.status)}`}>{supplier.status}</span></td>
        <td>${supplier.amount.toFixed(2)}</td>
        <td>${supplier.amountPaid.toFixed(2)}</td>
        <td>${supplier.dueAmount.toFixed(2)}</td>
        <td><span className={`${getPaymentStatusColor(supplier.paymentStatus)}`}> • {supplier.paymentStatus}</span></td>
        <td style={{padding:'10px', textAlign:'center', display:'flex', gap:'10px'}}>
          <FaRegEdit className="update-icon" />
          <MdDeleteForever className="delete-icon" />
        </td>
        </tr>
    
  );
};

function AllProducts() {


  const filteredData = dummyData;

  const paginatedData = filteredData;

  return (
    <>
      <div className='cont'>
        
        {/* header */}
        <div className='head'>
          <div className='heading'>
            <span className='heading-p'>Purchase Returns</span>
            <br />
            <span className='heading-m'>Manage your purchase return</span>
          </div>
          <div className='heading-buttons'>
            <div className='heading-icons-p'><GrDocumentPdf /></div>
            <div className='heading-icons-x'><TbFileTypeXml /></div>
            <div className='heading-icons-r'><HiOutlineRefresh /></div>
            <div className='heading-icons-a'><IoIosArrowUp /></div>
            <Link to="/AddPurchaseReturn" className='link-icon'><CiCirclePlus className='icon' /> Add Sales Return</Link>
          </div>
        </div>

        {/* search */}
        <div className='search'>
          <div className='search-bar'>
            <IoIosSearch className='search-icon' />
            <input type="text" placeholder='search' className='search-box'/>
          </div>
          <div className='status-bar'>
            <div className='status'>
              <select className='sel'>
                <option>Status</option>
                <option>Approved</option>
                <option>Pending</option>
                <option>Rejected</option>
              </select>
            </div>
            <div className='sort'>
              <select className='sel'>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>All Time</option>
              </select>
            </div>
          </div>
        </div>

        {/* product bar */}
        <div className='product-cont'>
          <div className='product-details'>
            <table className='table'>
            <thead className='table-head'>
                <tr>
                    <th className='check-box'><input type="checkbox" /></th>
                    <th>Product Image</th>
                    <th>Date</th>
                    <th>Supplier Name</th>
                    <th>Reference</th>
                    <th>Status</th>
                    <th>Total</th>
                    <th>Paid</th>
                    <th>Due</th>
                    <th>Payment Status</th>
                    <th style={{padding:'20px'}}></th>
                </tr>
            </thead>
            <tbody>
                {paginatedData.map((supplier) => (<SupplierRow key={supplier.id} supplier={supplier} />))}
            </tbody>
            </table>
          </div>
        </div>

        {/* product actions */}
        <div className='action'>
          <div className='row-page'>
            <span>Row Per Page</span>
            <select>
              <option>10</option>
              <option>20</option>
            </select>
            <span>Entries</span>
          </div>
          <div className='row-num'>
            <IoIosArrowBack className="arrow-back"/>
            <span className='counting'>1</span>
            <IoIosArrowForward className="arrow-forward"/>
          </div>
        </div>

        {/* setting icon */}
        <div className='setting'>
            <IoMdSettings />
        </div>

      </div>
    </>
  );
}

export default AllProducts;
