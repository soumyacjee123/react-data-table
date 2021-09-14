import { Component } from "react";
import axios from 'axios';
import DataTable from 'react-data-table-component';

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            column: [
                {
                    name: 'Name',
                    selector: 'name',
                    sortable: false,
                },
                {
                    name: 'Address',
                    selector: 'address',
                    sortable: false,
                },
                {
                    name: 'Fee Type',
                    selector: 'fee_type',
                    sortable: false,
                },
                {
                    name: 'Available Capacity',
                    selector: 'available_capacity',
                    sortable: true,
                    defaultSortField: true,
                    defaultSortAsc: true,
                },
                {
                    name: 'Available Capacity Dose1',
                    selector: 'available_capacity_dose1',
                    sortable: false,
                },
                {
                    name: 'Available Capacity Dose2',
                    selector: 'available_capacity_dose2',
                    sortable: false,
                },
                {
                    name: 'Fee',
                    selector: 'fee',
                    sortable: false,
                },
                {
                    name: 'Min Age Limit',
                    selector: 'min_age_limit',
                    sortable: false,
                },
                {
                    name: 'Vaccine',
                    selector: 'vaccine',
                    sortable: false,
                }
            ]
        }

    }
    componentDidMount() {
        axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=725&date=13-09-2021').then((res)=>{
            console.log("type check",typeof res.data.sessions[1].available_capacity);
            this.setState({
                ...this.state,
                data: res.data.sessions
            })
        })
        .catch((error)=>{
            console.log("err", error)
        })
    }
    render() {
        console.log("check response", this.state.data);
        return (
            <div>
                <button type="button" onClick={this.dataChangeAboveEighteen}>Above 18</button>
                <button type="button" onClick={this.dataChangeAboveFortifive}>Above 45</button>
                <DataTable 
                    title="Covid vaccine" 
                    columns={this.state.column} 
                    data={this.state.data} 
                    defaultSortField="available_capacity"
                    defaultSortAsc="true"
                />
            </div>
        )
    }

}
export default Data;