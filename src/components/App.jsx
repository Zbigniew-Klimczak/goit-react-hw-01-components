import { Profile } from './task1/Profile.jsx';
import user from './task1/user.json';
import { Statistics } from './task2/Statistics.jsx';
import data from './task2/data.json';
import { FriendList } from './task3/FriendList.jsx';
import friends from './task3/friends.json';
import { TransactionHistory } from './task4/TransactionHistory.jsx';
import transactions from './task4/transactions.json';
export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
