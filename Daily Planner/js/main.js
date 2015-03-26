$(document).ready(function(e){
	// AddTask Event
	$("#add-task-form").on("submit", function(e){
		addTask(e);
	});

	// Edit Task
	$("#edit-task-form").on("submit", function(e){
		updateTask(e);
	});

	displayTasks();
	
	// Function to display tasks
	function displayTasks(){
		var taskList = JSON.parse(localStorage.getItem('tasks'));
		
		// Sort Tasks by time
		if (taskList != null){
			taskList = taskList.sort(sortByTime);
		}
		
		// Loop through tasks
		if (localStorage.getItem('tasks') != null){
			$.each(taskList, function(key, value){
				$("#task-table").append("<tr id='" + value.id + "'>" +
																"<td>" + value.task + "</td>" +
																"<td>" + value.priority + "</td>" +
																"<td>" + value.date + "</td>" +
																"<td>" + value.time + "</td>" +
																"<td><a href='edit.html?id=" + value.id + "'>Edit</a> | <a href='#' id='remove-task'>Remove</a></td>" +
																"</tr>");
			});
		}
	}
	
	// Function to sort tasks
	function sortByTime(a, b){
		var aTime = a.task_time;
		var bTime = b.task_time;
		return (aTime < bTime)? -1 : ((aTime > bTime)? 1 : 0);
	}
	
	// Function to add a task
	function addTask(e){
		//Add Unique ID
		var newDate = new Date().getTime();
		var id = newDate;
		
		var task = $('#task').val();
		var task_priority = $('#priority').val();
		var task_date = $('#date').val();
		var task_time = $('#time').val();
		
		//Simple Validation
		if (task == ""){
			alert('Task is required');
			e.preventDefault();
		} else if (task_date == "") {
			alert('Date is required');
			e.preventDefault();
		} else if (task_time == "") {
			alert('Time is required');
			e.preventDefault();
		} else if (task_priority == "") {
			task_priority = 'normal';
		} else {
			var tasks = JSON.parse(localStorage.getItem('tasks'));
			//Check Tasks
			if (tasks == null) tasks = [];
			
			// New Task Object (JSON)
			var new_task = {
				"id": id,
				"task": task,
				"priority": task_priority,
				"date": task_date,
				"time": task_time
			};
			tasks.push(new_task);
			localStorage.setItem('tasks', JSON.stringify(tasks));
		}
	}
	
	// Function to update tasks
	function updateTask(e){
		var id = $("#task_id").val();
		var task = $('#task').val();
		var task_priority = $('#priority').val();
		var task_date = $('#date').val();
		var task_time = $('#time').val();
		
		var taskList = JSON.parse(localStorage.getItem('tasks'));
		for(var i=0; i < taskList.length; i++){
			if(taskList[i].id == id){
				taskList.splice(i, 1);
			}
			localStorage.setItem('tasks', JSON.stringify(taskList));
		}
		
		//Simple Validation
		if (task == ""){
			alert('Task is required');
			e.preventDefault();
		} else if (task_date == "") {
			alert('Date is required');
			e.preventDefault();
		} else if (task_time == "") {
			alert('Time is required');
			e.preventDefault();
		} else if (task_priority == "") {
			task_priority = 'normal';
		} else {
			var tasks = JSON.parse(localStorage.getItem('tasks'));
			//Check Tasks
			if (tasks == null) tasks = [];
			
			// New Task Object (JSON)
			var new_task = {
				"id": id,
				"task": task,
				"priority": task_priority,
				"date": task_date,
				"time": task_time
			};
			tasks.push(new_task);
			localStorage.setItem('tasks', JSON.stringify(tasks));
		}
	}
});

// Function for getting a single id
function getTask(){
	var $_GET = getQueryParams(document.location.search);
	var id = $_GET['id'];
	
	var taskList = JSON.parse(localStorage.getItem('tasks'));
	for(var i = 0; i < taskList.length; i++){
		if(taskList[i].id == id){
			$('#edit-task-form #task_id').val(taskList[i].id);
			$('#edit-task-form #task').val(taskList[i].task);
			$('#edit-task-form #priority').val(taskList[i].priority);
			$('#edit-task-form #date').val(taskList[i].date);
			$('#edit-task-form #time').val(taskList[i].time);
		}
	}
}
// Function to Get HTTP GET Requests
function getQueryParams(qs){
	qs = qs.split("+").join(" ");
	var params = {},
			tokens,
			re = /[?&]?([^=]+)=([^&]*)/g;
	while(tokens = re.exec(qs)){
		params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
	}
	return params;
}