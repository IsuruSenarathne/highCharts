import pandas as pd

FILE_PATH = 'data_file.xlsx'

def proc_data(FILE_PATH):
    df = pd.read_excel(FILE_PATH)
    df.index += 1
    json_out = df.to_json(orient='records')
    return json_out
    
    

