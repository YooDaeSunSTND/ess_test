import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import rawPeople from 'data/people';
import Flex from 'components/common/Flex';
import Avatar from 'components/common/Avatar';
import IconButton from 'components/common/IconButton';

const AddToFeed = () => {
  const people = rawPeople.slice(0, 8);

  return (
    <Card className="mb-3">
      <Card.Header
        as={Flex}
        alignItems="center"
        justifyContent="between"
        className="bg-light"
      >
        <h5 className="mb-0">Add to your feed</h5>
        <Link className="fs--1" href="#!">
          See all
        </Link>
      </Card.Header>
      <Card.Body>
        {people.map((person, index) => (
          <SingleItem
            {...person}
            key={person.id}
            divider={people.length === index + 1}
          />
        ))}
      </Card.Body>
    </Card>
  );
};

AddToFeed.propTypes = {
  peoples: PropTypes.number
};

const SingleItem = ({ avatarSrc, name, mutual, divider }) => (
  <Flex>
    <Avatar size="3xl" src={avatarSrc} />
    <div className="flex-1 ms-2">
      <h6 className="mb-0">
        <Link href="/user/profile">{name}</Link>
      </h6>
      {!!mutual && <p className="fs--1 mb-0">{mutual} mutual connections</p>}
      <IconButton
        className="mt-1 py-0 border"
        variant="light"
        size="sm"
        icon="user-plus"
        transform="shrink-5"
      >
        <span className="fs--1">Follow</span>
      </IconButton>

      {!divider && <div className="border-dashed-bottom my-3" />}
    </div>
  </Flex>
);

SingleItem.propTypes = {
  avatarSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  mutual: PropTypes.number,
  divider: PropTypes.bool
};

export default AddToFeed;
