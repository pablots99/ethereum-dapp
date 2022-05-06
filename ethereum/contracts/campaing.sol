    // SPDX-License-Identifier: GPL-3.0

    pragma solidity >=0.7.0 <0.9.0;


    contract CampaingFactory {
        Campaing[] public campaings;

        function createCampaing(uint min,string memory name, string memory description) public {
            Campaing c = new Campaing(min,msg.sender,name,description);
            campaings.push(c);
        }

        function getCampaings() public view returns (Campaing[] memory ) {
            return campaings;
        }
    }

    contract Campaing{


        struct Request {
            uint id;
            string description;
            uint value;
            address  recipent; //addres the money will be sent to
            uint    vote_yes;
            bool    complete;
            mapping(address => bool) approvals;
        }
        string    public            name;
        string    public            description;
        uint      public           count_requests;
        uint      private           contributors;
        address   public            manager;
        uint      public            minContribution;
        Request[] public            requests;
        mapping(address => bool) public     approvers;

        constructor(uint _min_contribution,address _manager,string memory _name,  string memory _description) {

            manager = _manager;
            name = _name;
            description = _description;
            minContribution = _min_contribution;

        }

        modifier restircted() {
            require(msg.sender == manager);
            _;
        }

        function contribute() public payable {
            require(msg.value >= minContribution);
            contributors++;
            approvers[msg.sender] = true;
        }

        function getBalance() public view returns(uint){
            return address(this).balance;
        }

        function makeRequest(string memory _description, uint  _value,address  _recipent) public restircted{
            count_requests += 1;
            require(_value < address(this).balance);
            Request storage r  = requests.push();
            r.id = count_requests;
            r.description =  _description;
            r.value =  _value;
            r.recipent =  _recipent;
            r.vote_yes =  0;
            r.complete =  false;
        }

        function aproveRequest(uint id,bool vote) public  {
            require(approvers[msg.sender]);
            //require(requests[id]);
            require(!requests[id].complete);
            require(!requests[id].approvals[msg.sender]);
            requests[id].approvals[msg.sender] = vote;
            if(vote)
            {
                requests[id].vote_yes++;
            }
            if(requests[id].vote_yes > contributors / 2)
            {
                requests[id].complete = true;
                payable(requests[id].recipent).transfer(requests[id].value);
            }
        }

    }
