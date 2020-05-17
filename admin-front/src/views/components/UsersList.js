import React, { Component, lazy } from 'react';
import { Progress, } from 'reactstrap';
import { Table } from 'reactstrap';


class UsersList extends Component {

  render() {

    return (
      <div className="animated fadeIn">

        <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
          <thead className="thead-light">
            <tr>
              <th className="text-center"><i className="icon-people"></i></th>
              <th>User</th>
              <th>Usage</th>
              <th className="text-center">Delete User</th>
              <th>Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">
                <div className="avatar">
                  <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </td>
              <td>
                <div>Yiorgos Avraamu</div>
                <div className="small text-muted">
                  <span>New</span> | Registered: Jan 1, 2015
                      </div>
              </td>

              <td>
                <div className="clearfix">
                  <div className="float-left">
                    <strong>50%</strong>
                  </div>
                  <div className="float-right">
                    <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                  </div>
                </div>
                <Progress className="progress-xs" color="clr-b1" value="50" />
              </td>
              <td className="text-center">
                <i className="fa fa-trash" style={{ fontSize: 24 + 'px' }}></i>
              </td>
              <td>
                <div className="small text-muted">Last login</div>
                <strong>10 sec ago</strong>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <div className="avatar">
                  <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-danger"></span>
                </div>
              </td>
              <td>
                <div>Avram Tarasios</div>
                <div className="small text-muted">

                  <span>Recurring</span> | Registered: Jan 1, 2015
                      </div>
              </td>

              <td>
                <div className="clearfix">
                  <div className="float-left">
                    <strong>10%</strong>
                  </div>
                  <div className="float-right">
                    <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                  </div>
                </div>
                <Progress className="progress-xs" color="clr-b3" value="10" />
              </td>
              <td className="text-center">
                <i className="fa fa-trash" style={{ fontSize: 24 + 'px' }}></i>
              </td>
              <td>
                <div className="small text-muted">Last login</div>
                <strong>5 minutes ago</strong>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <div className="avatar">
                  <img src={'assets/img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-warning"></span>
                </div>
              </td>
              <td>
                <div>Quintin Ed</div>
                <div className="small text-muted">
                  <span>New</span> | Registered: Jan 1, 2015
                      </div>
              </td>

              <td>
                <div className="clearfix">
                  <div className="float-left">
                    <strong>74%</strong>
                  </div>
                  <div className="float-right">
                    <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                  </div>
                </div>
                <Progress className="progress-xs" color="clr-b0" value="74" />
              </td>
              <td className="text-center">
                <i className="fa fa-trash" style={{ fontSize: 24 + 'px' }}></i>
              </td>
              <td>
                <div className="small text-muted">Last login</div>
                <strong>1 hour ago</strong>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <div className="avatar">
                  <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-secondary"></span>
                </div>
              </td>
              <td>
                <div>Enéas Kwadwo</div>
                <div className="small text-muted">
                  <span>New</span> | Registered: Jan 1, 2015
                      </div>
              </td>

              <td>
                <div className="clearfix">
                  <div className="float-left">
                    <strong>98%</strong>
                  </div>
                  <div className="float-right">
                    <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                  </div>
                </div>
                <Progress className="progress-xs" color="clr-b3" value="98" />
              </td>
              <td className="text-center">
                <i className="fa fa-trash" style={{ fontSize: 24 + 'px' }}></i>
              </td>
              <td>
                <div className="small text-muted">Last login</div>
                <strong>Last month</strong>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <div className="avatar">
                  <img src={'assets/img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </td>
              <td>
                <div>Agapetus Tadeáš</div>
                <div className="small text-muted">
                  <span>New</span> | Registered: Jan 1, 2015
                      </div>
              </td>

              <td>
                <div className="clearfix">
                  <div className="float-left">
                    <strong>22%</strong>
                  </div>
                  <div className="float-right">
                    <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                  </div>
                </div>
                <Progress className="progress-xs" color="clr-b0" value="22" />
              </td>
              <td className="text-center">
                <i className="fa fa-trash" style={{ fontSize: 24 + 'px' }}></i>
              </td>
              <td>
                <div className="small text-muted">Last login</div>
                <strong>Last week</strong>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <div className="avatar">
                  <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-danger"></span>
                </div>
              </td>
              <td>
                <div>Friderik Dávid</div>
                <div className="small text-muted">
                  <span>New</span> | Registered: Jan 1, 2015
                      </div>
              </td>

              <td>
                <div className="clearfix">
                  <div className="float-left">
                    <strong>43%</strong>
                  </div>
                  <div className="float-right">
                    <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                  </div>
                </div>
                <Progress className="progress-xs" color="clr-b2" value="43" />
              </td>
              <td className="text-center">
                <i className="fa fa-trash" style={{ fontSize: 24 + 'px' }}></i>
              </td>
              <td>
                <div className="small text-muted">Last login</div>
                <strong>Yesterday</strong>
              </td>
            </tr>
          </tbody>
        </Table>

      </div>
    )
  }
}

export default UsersList;







