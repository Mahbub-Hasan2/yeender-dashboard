import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
    <div className="sidebar">
        <List>
            <Link to="/">
                <ListItem button>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <h6 className="mb-0">Home</h6>
                </ListItem>
            </Link>
            <Link to="/dashboard/about">
                <ListItem button>
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
                    <h6 className="mb-0">About</h6>
                </ListItem>
            </Link>
            <Link to="/dashboard/services">
                <ListItem button>
                    <ListItemIcon>
                        <RoomServiceIcon />
                    </ListItemIcon>
                    <h6 className="mb-0">Service</h6>
                </ListItem>
            </Link>
            <Link to="/dashboard/ordersInfo">
                <ListItem button>
                    <ListItemIcon>
                        <i className="fas fa-luggage-cart fa-lg"></i>
                    </ListItemIcon>
                    <h6 className="mb-0">Orders List</h6>
                </ListItem>
            </Link>
        </List>

        <Divider />

        <List>
            <Link to="/dashboard/projects">
                <ListItem button>
                    <ListItemIcon>
                        <i className="fas fa-project-diagram fa-lg"></i>
                    </ListItemIcon>
                    <h6 className="mb-0">Projects</h6>
                </ListItem>
            </Link>

            <Link to="/dashboard/client_review">
                <ListItem button>
                    <ListItemIcon>
                        <i className="fas fa-certificate fa-lg"></i>
                    </ListItemIcon>
                    <h6 className="mb-0">Review</h6>
                </ListItem>
            </Link>

            <Link to="/dashboard/users_email">
                <ListItem button>
                    <ListItemIcon>
                        <i className="fas fa-at fa-2x"></i>
                    </ListItemIcon>
                    <h6 className="mb-0">Users Email</h6>
                </ListItem>
            </Link>

            <Link to="/dashboard/clients_logo">
                <ListItem button>
                    <ListItemIcon>
                    <i className="fas fa-bullseye fa-2x"></i>
                    </ListItemIcon>
                    <h6 className="mb-0">Clients Logo</h6>
                </ListItem>
            </Link>
        </List>
    </div>
);

export default Sidebar;
