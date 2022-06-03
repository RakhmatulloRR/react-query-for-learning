import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};
const fetchCoursesBychannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};
export default function DependentQueriesPage({ email }) {
  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEmail(email)
  );
  const channelId = user?.data.channelId;
  const { data: course } = useQuery(
    ["course", channelId],
    () => fetchCoursesBychannelId(channelId),
    { enabled: !!channelId }
  );
  console.log(channelId, course);
  return <div>Dependent Queries page</div>;
}
