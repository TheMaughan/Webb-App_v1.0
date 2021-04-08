from django.shortcuts import render, redirect
from inventory.models import Item

def index(request):
    """
    Display summary and details of all inventory.  Provides a form for the 
    user to submit a new item to the inventory
    """
    # Read all the items in the database
    items = Item.objects.all()

    # Calculate the total value
    total_value = 0
    for item in items:
        total_value += item.value

    # Build the dictionary of parameters to give to the HTML template
    values = {"inv_total" : len(items),
              "inv_total_value" : total_value,
              "inv_list" : items}

    # Create and display the HTML page
    return render(request, 'inventory/index.html', values) 

def add(request):
    """
    Process request to add new item to the inventory.  Return back to the 
    main index page when done.
    """
    # Read values from GET request (TODO: Add error checking here)
    try:
        item_id = request.GET["item_id"]
        description = request.GET["description"]
        value = float(request.GET["value"])
        hazardous = request.GET["hazardous"] == "Yes"

        # Save to the database
        item = Item(item_id=item_id, description=description, 
                    value=value, hazardous=hazardous)
        item.save()

    except Exception as e:
        # TODO: Send an error message back to the main index page
        print("Unable to save to database: {}".format(e))

    # Return to main index page
    return redirect("index")


def display(request, item_id):
    """
    Display only the details of the item_id specified.
    """
    try:
        # Get the item based on the item_id
        item = Item.objects.get(item_id=item_id)

        # Build the dictionary of parameters for the HTML template
        values = {"item" : item}

        # Create and display the HTML page
        return render(request, 'inventory/display.html', values) 
    except Exception as e:
        # TODO: Send an error message back to the main index page
        print("Invalid item_id = {}  exception: {}".format(item_id, e))
        return redirect("index")


