Tasks = []

def app_menu():
    print("-- TO DO LIST --")
    print("\n 1. ADD NEW TASKS ")
    print(" 2. VIEW TASKS ")
    print(" 3. DELETE TASKS ")
    print(" 4. MARK TASKS AS COMPLETE ")
    print(" 5. EXIT ")
    
def add_tasks(choice):
    if choice == 1:
        x = input("ENTER NEW TASKS:")
        if x == "":
            print("--ENTER VALID DATA!!--")
        else:
            Tasks.append(x)
     
def view_tasks(choice):
    if choice == 2:
        if not Tasks:
            print("--ADD NEW TASKS PLEASE!!--")
        else:
            print(Tasks)

def delete_tasks(choice):
    if choice == 3:
        if not Tasks:
            print("--THERE WERE NO TASKS ADDED!!--")  
        else:
            for index, task in enumerate(Tasks, start=1):
                print(index, task)

            try:
              task_no = int(input("ENTER TASK NUMBER TO DELETE: "))
            except ValueError:
                print("--Enter a valid number--")
                return
            if task_no < 1 or task_no > len(Tasks):
                print("--INVALID TASK NUMBER!!--")
            else:
                removed_task = Tasks.pop(task_no - 1)
                print("DELETED:", removed_task)

def mark_as_complete(choice):
    if choice == 4:
        if not Tasks:
            print("--KINDLY ADD SOME NEW TASKS FIRST!!--")
        else:
            for index, task in enumerate(Tasks, start=1):
                print(index, task)
            try:
              task_no = int(input("ENTER TASK NUMBER TO MARK AS COMPLETE: "))
            except ValueError:
                print("--Enter a valid number--")
                return
            if task_no < 1 or task_no > len(Tasks):
                print("--INVALID TASK NUMBER!!--") 
            else:
                task_index = task_no - 1

                if "[DONE]" in Tasks[task_index]:
                   print("TASK IS ALREADY COMPLETE!")
                else:
                   Tasks[task_index] = Tasks[task_index] + " [DONE]"
                   print("TASK MARKED AS COMPLETE!")
                
while True:
    app_menu()

    try:
       choice = int(input("choose your option:- "))
    except ValueError:
        print("ENTER A VALID OPTION!")
        continue 

    if choice < 1 or choice > 5:
        print("--INVALID OPTION!!--")
        continue

    add_tasks(choice)
    view_tasks(choice)
    delete_tasks(choice)
    mark_as_complete(choice)

    if choice == 5:
        break

               

















