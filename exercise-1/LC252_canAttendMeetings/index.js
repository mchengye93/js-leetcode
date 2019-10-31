// Given an array of meeting time intervals consisting of start and end
// times [s1, e1], [s2, e2], ... , determine if a person could attend all meetings.
// ---------------------------
// canAttendMeetings([[0, 30], [5, 10], [15, 20]]) --> false
// canAttendMeetings([[7, 10], [2, 4]]) --> true

const canAttendMeetings = intervals => {
    const starts = [];
    const ends = [];

    for (let i = 0; i < intervals; i++) {
        starts.push(intervals[i][0]);
        ends.push(intervals[i][1]);
    }
    starts.sort((a,b)=> a-b);
    ends.sort((a,b)=> a-b);

    for (let i = 0 ; i < starts.length;i++) {

        //look to see if next start falls between end of first meeting
        if (starts[i+1] < ends[i]) return false
    }
    return true;


};

module.exports = canAttendMeetings;
