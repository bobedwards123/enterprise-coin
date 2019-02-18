import { Header, Image, Table } from 'semantic-ui-react'
import _ from 'lodash'
import React, { Component } from 'react'
import {UserData, userData} from './TestData';



export default class UserComponent extends Component {
  state = {
    column: null,
    data: userData,
    direction: null,
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  render() {
    const { column, data, direction } = this.state

    return (
      <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
          <Table.HeaderCell
              sorted={column === 'avatar' ? direction : null}
              onClick={this.handleSort('avatar')}
            >
              Avatar
            </Table.HeaderCell>
          <Table.HeaderCell
              sorted={column === '_id' ? direction : null}
              onClick={this.handleSort('_id')}
            >
              _id
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'name' ? direction : null}
              onClick={this.handleSort('name')}
            >
              Name
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'age' ? direction : null}
              onClick={this.handleSort('age')}
            >
              Age
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'gender' ? direction : null}
              onClick={this.handleSort('gender')}
            >
              Gender
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'tokens' ? direction : null}
              onClick={this.handleSort('tokens')}
            >
              Inc Tokens
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(data, ({ avatar,_id, age, gender, name, tokens }) => (
            <Table.Row key={name}>
              <Table.Cell><Image size="mini" src={avatar} circular  /></Table.Cell>
              <Table.Cell>{_id}</Table.Cell>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>{age}</Table.Cell>
              <Table.Cell>{gender}</Table.Cell>
              <Table.Cell>{tokens}</Table.Cell>
              
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  }
}
