import {Link, useParams } from "react-router-dom";

const leads = [
    {
        id: 1,
        title: 'Иванов Сергей',
        status: 'todo',
        phone: '79998887766'
    },
    {
        id: 2,
        title: 'Cтепан Суровый',
        status: 'todo',
        phone: '79998887755'
    }
]

export function Lead() {
    const { id } = useParams(),
        lead = leads.find(item => item.id === id);
    console.log(Location);
    return (
        <div >
            <div>Заявка {lead.id}</div>
        </div>
    )
}

export default function Leads() {
    return <div>
        {leads.map( ({ id, title, status, phone }) => <div key={id}>
            <Link to={`/leads/${id}`}>
                <div>id: {id} - {title} ({status})</div>
                <div>{phone}</div>
            </Link>
        </div>)}
    </div>;
};