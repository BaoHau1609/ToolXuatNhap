# import pandas as pd
# import json

# # Đọc file Excel
# file_path = 'assets/data/maHang.xlsx'  # Đường dẫn tới file Excel
# df = pd.read_excel(file_path, sheet_name=0)  # Đọc sheet đầu tiên

# # Giả sử tên sản phẩm nằm trong cột đầu tiên
# mH = df.iloc[:, 0].astype(str).tolist()  # Chuyển đổi cột thành danh sách

# formatted_output = json.dumps(mH)

# # In ra mảng với dấu nháy kép
# print([f'{item}' for item in formatted_output])  # Sử dụng f-string để bao quanh bằng dấu nháy kép



import pandas as pd
import json

# Đọc file Excel
file_path = 'assets/data/position.xlsx'  # Đường dẫn tới file Excel
df = pd.read_excel(file_path, sheet_name=0)  # Đọc sheet đầu tiên

# Giả sử tên sản phẩm nằm trong cột đầu tiên
mH = df.iloc[:, 0].astype(str).tolist()  # Chuyển đổi cột thành danh sách

# Chuyển đổi danh sách thành chuỗi JSON với UTF-8
formatted_output = json.dumps(mH, ensure_ascii=False)

# In ra kết quả
print(formatted_output)  # Kết quả sẽ là: ["abc", "đef", ...] với các ký tự UTF-8