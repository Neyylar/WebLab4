import React from "react";
import {IPointsArrProps} from "../../pages/HomePage";
import "./Table.styled";
import { Table_Styled } from "./Table.styled";

const PointsTable = (points: IPointsArrProps) => {
    return(
        <Table_Styled className="table-striped table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>X</th>
                    <th>Y</th>
                    <th>R</th>
                    <th>Result</th>
                    <th>Creation Date</th>
                </tr>
            </thead>
            <tbody>
            {
                points.points.map(point => {
                    const parsedRes = point.result ? "inside" : "outside";
                    const parsedDate = new Date(Date.parse(point.createTime)).toDateString();
                    return(
                        <tr key={point.id}>
                            <td>{point.id}</td>
                            <td>{point.x}</td>
                            <td>{point.y}</td>
                            <td>{point.r}</td>
                            <td className={parsedRes}><span>{parsedRes}</span></td>
                            <td>{parsedDate}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </Table_Styled>
    );
};

export default PointsTable;