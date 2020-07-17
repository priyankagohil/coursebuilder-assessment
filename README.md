# GOOGLE COURSE BUILDER
For more information on Course Builder, see the documentation at
https://www.google.com/edu/openonline/course-builder/index.html

## Commands to run project on localhost:

1) Activate Virtual environment
2) Install all dependencies using:
> pip install -r requirements.txt 
3) Run the app using :
> ./scripts/start_in_shell.sh -f -s


## TASK
add another column called "Admin Emails" , and for each course have a 
text input with the current admin email pre-filled up, along with a "Save" 
button next to it. On changing the data in the field and clicking "Save", 
the setting should get updated in the database. This means that after saving, 
if you open "Settings -> Course" once again, you should see the new admin emails.

## Files where changes have been made
modules > admin > admin.py

modules > admin > ststic > js > courses.js

modules > admin > templates > courses.html

controllers > sites.py 

## Files used and referenced but not made changes to
modules > admin > config.py

modules > courses > settings.py

modules > courses > courses.py

modules > dashboard > templates > view.html

modules > dashboard > dashboard.py

controllers > utils.py 

common > safe_dom.py

common > jinja_utils.py

common > schema_fields.py

models > models.py

models > courses.py



