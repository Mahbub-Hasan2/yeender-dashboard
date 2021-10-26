import { Container } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { FixedSizeList } from 'react-window';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 400,
        maxWidth: 300,
        backgroundColor: theme.palette.background.paper,
    },
}));

function renderRow(props: ListChildComponentProps) {
    const { index, style } = props;

    return (
        <ListItem button style={style} key={index}>
            <ListItemText primary={`Item ${index + 1}`} />
        </ListItem>
    );
}



const UserEmail = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <div className="row">
                <div className="col-md">
                    <FixedSizeList height={400} width={300} itemSize={46} itemCount={200}>
                        {renderRow}
                    </FixedSizeList>
                </div>
                <div className="col-md"></div>
            </div>
        </Container>
    );
};

export default UserEmail;