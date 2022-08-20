import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div> 
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center mt-5">
                <li className="page-item disabled">
                <Link className="page-link" to="/" tabindex="-1">Previous</Link>
                </li>
                <li className="page-item"><Link className="page-link" to="/">1</Link></li>
                <li className="page-item"><Link className="page-link" to="/indexpage">2</Link></li>
                <li className="page-item"><Link className="page-link" to="/">3</Link></li>
                <li className="page-item">
                <Link className="page-link" to="/">Next</Link>
                </li>
            </ul>
            </nav>
    </div>
  )
}
